import React from 'react';
const LABEL_24718 = 'component_24718';
export function Component24718({ value = 24718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24718, 'data-value': derived.doubled }, children);
}
export default Component24718;
