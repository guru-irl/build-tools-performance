import React from 'react';
const LABEL_18274 = 'component_18274';
export function Component18274({ value = 18274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18274, 'data-value': derived.doubled }, children);
}
export default Component18274;
