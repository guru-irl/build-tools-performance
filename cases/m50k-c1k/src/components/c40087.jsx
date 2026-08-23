import React from 'react';
const LABEL_40087 = 'component_40087';
export function Component40087({ value = 40087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40087, 'data-value': derived.doubled }, children);
}
export default Component40087;
