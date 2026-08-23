import React from 'react';
const LABEL_22781 = 'component_22781';
export function Component22781({ value = 22781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22781, 'data-value': derived.doubled }, children);
}
export default Component22781;
