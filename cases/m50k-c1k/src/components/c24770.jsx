import React from 'react';
const LABEL_24770 = 'component_24770';
export function Component24770({ value = 24770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24770, 'data-value': derived.doubled }, children);
}
export default Component24770;
