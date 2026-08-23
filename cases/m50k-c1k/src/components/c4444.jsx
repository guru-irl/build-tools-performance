import React from 'react';
const LABEL_4444 = 'component_4444';
export function Component4444({ value = 4444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4444, 'data-value': derived.doubled }, children);
}
export default Component4444;
