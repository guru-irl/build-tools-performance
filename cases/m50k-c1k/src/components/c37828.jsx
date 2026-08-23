import React from 'react';
const LABEL_37828 = 'component_37828';
export function Component37828({ value = 37828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37828, 'data-value': derived.doubled }, children);
}
export default Component37828;
