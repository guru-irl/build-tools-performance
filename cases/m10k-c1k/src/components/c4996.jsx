import React from 'react';
const LABEL_4996 = 'component_4996';
export function Component4996({ value = 4996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4996, 'data-value': derived.doubled }, children);
}
export default Component4996;
