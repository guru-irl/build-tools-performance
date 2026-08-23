import React from 'react';
const LABEL_18645 = 'component_18645';
export function Component18645({ value = 18645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18645, 'data-value': derived.doubled }, children);
}
export default Component18645;
