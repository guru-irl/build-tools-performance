import React from 'react';
const LABEL_28444 = 'component_28444';
export function Component28444({ value = 28444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28444, 'data-value': derived.doubled }, children);
}
export default Component28444;
