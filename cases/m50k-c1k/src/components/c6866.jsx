import React from 'react';
const LABEL_6866 = 'component_6866';
export function Component6866({ value = 6866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6866, 'data-value': derived.doubled }, children);
}
export default Component6866;
