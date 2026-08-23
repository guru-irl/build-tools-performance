import React from 'react';
const LABEL_24144 = 'component_24144';
export function Component24144({ value = 24144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24144, 'data-value': derived.doubled }, children);
}
export default Component24144;
