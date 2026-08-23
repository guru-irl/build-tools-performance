import React from 'react';
const LABEL_11828 = 'component_11828';
export function Component11828({ value = 11828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11828, 'data-value': derived.doubled }, children);
}
export default Component11828;
