import React from 'react';
const LABEL_10444 = 'component_10444';
export function Component10444({ value = 10444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10444, 'data-value': derived.doubled }, children);
}
export default Component10444;
