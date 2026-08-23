import React from 'react';
const LABEL_29690 = 'component_29690';
export function Component29690({ value = 29690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29690, 'data-value': derived.doubled }, children);
}
export default Component29690;
