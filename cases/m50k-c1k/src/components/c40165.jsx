import React from 'react';
const LABEL_40165 = 'component_40165';
export function Component40165({ value = 40165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40165, 'data-value': derived.doubled }, children);
}
export default Component40165;
