import React from 'react';
const LABEL_10501 = 'component_10501';
export function Component10501({ value = 10501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10501, 'data-value': derived.doubled }, children);
}
export default Component10501;
