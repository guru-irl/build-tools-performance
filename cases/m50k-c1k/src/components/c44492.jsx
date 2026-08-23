import React from 'react';
const LABEL_44492 = 'component_44492';
export function Component44492({ value = 44492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44492, 'data-value': derived.doubled }, children);
}
export default Component44492;
