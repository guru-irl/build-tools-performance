import React from 'react';
const LABEL_13005 = 'component_13005';
export function Component13005({ value = 13005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13005, 'data-value': derived.doubled }, children);
}
export default Component13005;
