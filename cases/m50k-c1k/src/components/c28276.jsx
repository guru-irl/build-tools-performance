import React from 'react';
const LABEL_28276 = 'component_28276';
export function Component28276({ value = 28276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28276, 'data-value': derived.doubled }, children);
}
export default Component28276;
