import React from 'react';
const LABEL_19902 = 'component_19902';
export function Component19902({ value = 19902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19902, 'data-value': derived.doubled }, children);
}
export default Component19902;
