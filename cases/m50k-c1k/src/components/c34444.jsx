import React from 'react';
const LABEL_34444 = 'component_34444';
export function Component34444({ value = 34444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34444, 'data-value': derived.doubled }, children);
}
export default Component34444;
