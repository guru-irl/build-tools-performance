import React from 'react';
const LABEL_20366 = 'component_20366';
export function Component20366({ value = 20366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20366, 'data-value': derived.doubled }, children);
}
export default Component20366;
