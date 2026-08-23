import React from 'react';
const LABEL_38537 = 'component_38537';
export function Component38537({ value = 38537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38537, 'data-value': derived.doubled }, children);
}
export default Component38537;
