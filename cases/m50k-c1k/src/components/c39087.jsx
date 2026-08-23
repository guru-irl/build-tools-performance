import React from 'react';
const LABEL_39087 = 'component_39087';
export function Component39087({ value = 39087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39087, 'data-value': derived.doubled }, children);
}
export default Component39087;
