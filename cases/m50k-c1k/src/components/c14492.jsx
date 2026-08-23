import React from 'react';
const LABEL_14492 = 'component_14492';
export function Component14492({ value = 14492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14492, 'data-value': derived.doubled }, children);
}
export default Component14492;
