import React from 'react';
const LABEL_40996 = 'component_40996';
export function Component40996({ value = 40996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40996, 'data-value': derived.doubled }, children);
}
export default Component40996;
