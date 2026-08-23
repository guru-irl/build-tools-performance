import React from 'react';
const LABEL_29444 = 'component_29444';
export function Component29444({ value = 29444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29444, 'data-value': derived.doubled }, children);
}
export default Component29444;
