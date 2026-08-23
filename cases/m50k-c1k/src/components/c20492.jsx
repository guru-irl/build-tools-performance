import React from 'react';
const LABEL_20492 = 'component_20492';
export function Component20492({ value = 20492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20492, 'data-value': derived.doubled }, children);
}
export default Component20492;
