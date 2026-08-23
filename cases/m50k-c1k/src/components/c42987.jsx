import React from 'react';
const LABEL_42987 = 'component_42987';
export function Component42987({ value = 42987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42987, 'data-value': derived.doubled }, children);
}
export default Component42987;
