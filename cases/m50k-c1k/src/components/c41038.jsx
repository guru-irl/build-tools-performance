import React from 'react';
const LABEL_41038 = 'component_41038';
export function Component41038({ value = 41038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41038, 'data-value': derived.doubled }, children);
}
export default Component41038;
