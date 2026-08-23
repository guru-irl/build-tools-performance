import React from 'react';
const LABEL_20126 = 'component_20126';
export function Component20126({ value = 20126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20126, 'data-value': derived.doubled }, children);
}
export default Component20126;
