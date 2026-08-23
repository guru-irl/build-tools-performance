import React from 'react';
const LABEL_8996 = 'component_8996';
export function Component8996({ value = 8996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8996, 'data-value': derived.doubled }, children);
}
export default Component8996;
