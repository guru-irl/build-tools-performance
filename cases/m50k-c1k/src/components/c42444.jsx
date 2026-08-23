import React from 'react';
const LABEL_42444 = 'component_42444';
export function Component42444({ value = 42444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42444, 'data-value': derived.doubled }, children);
}
export default Component42444;
