import React from 'react';
const LABEL_18492 = 'component_18492';
export function Component18492({ value = 18492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18492, 'data-value': derived.doubled }, children);
}
export default Component18492;
