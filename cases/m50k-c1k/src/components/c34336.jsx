import React from 'react';
const LABEL_34336 = 'component_34336';
export function Component34336({ value = 34336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34336, 'data-value': derived.doubled }, children);
}
export default Component34336;
