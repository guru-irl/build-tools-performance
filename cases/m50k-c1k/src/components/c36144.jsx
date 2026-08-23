import React from 'react';
const LABEL_36144 = 'component_36144';
export function Component36144({ value = 36144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36144, 'data-value': derived.doubled }, children);
}
export default Component36144;
