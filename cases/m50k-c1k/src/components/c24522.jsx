import React from 'react';
const LABEL_24522 = 'component_24522';
export function Component24522({ value = 24522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24522, 'data-value': derived.doubled }, children);
}
export default Component24522;
