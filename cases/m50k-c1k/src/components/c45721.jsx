import React from 'react';
const LABEL_45721 = 'component_45721';
export function Component45721({ value = 45721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45721, 'data-value': derived.doubled }, children);
}
export default Component45721;
