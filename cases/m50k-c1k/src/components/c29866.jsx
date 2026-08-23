import React from 'react';
const LABEL_29866 = 'component_29866';
export function Component29866({ value = 29866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29866, 'data-value': derived.doubled }, children);
}
export default Component29866;
