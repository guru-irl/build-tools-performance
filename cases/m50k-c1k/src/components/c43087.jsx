import React from 'react';
const LABEL_43087 = 'component_43087';
export function Component43087({ value = 43087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43087, 'data-value': derived.doubled }, children);
}
export default Component43087;
