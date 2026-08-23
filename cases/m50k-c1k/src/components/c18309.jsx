import React from 'react';
const LABEL_18309 = 'component_18309';
export function Component18309({ value = 18309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18309, 'data-value': derived.doubled }, children);
}
export default Component18309;
