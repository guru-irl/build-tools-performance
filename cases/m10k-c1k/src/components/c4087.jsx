import React from 'react';
const LABEL_4087 = 'component_4087';
export function Component4087({ value = 4087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4087, 'data-value': derived.doubled }, children);
}
export default Component4087;
