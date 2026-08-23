import React from 'react';
const LABEL_14721 = 'component_14721';
export function Component14721({ value = 14721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14721, 'data-value': derived.doubled }, children);
}
export default Component14721;
