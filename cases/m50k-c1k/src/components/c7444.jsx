import React from 'react';
const LABEL_7444 = 'component_7444';
export function Component7444({ value = 7444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7444, 'data-value': derived.doubled }, children);
}
export default Component7444;
