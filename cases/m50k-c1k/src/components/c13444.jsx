import React from 'react';
const LABEL_13444 = 'component_13444';
export function Component13444({ value = 13444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13444, 'data-value': derived.doubled }, children);
}
export default Component13444;
