import React from 'react';
const LABEL_41190 = 'component_41190';
export function Component41190({ value = 41190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41190, 'data-value': derived.doubled }, children);
}
export default Component41190;
