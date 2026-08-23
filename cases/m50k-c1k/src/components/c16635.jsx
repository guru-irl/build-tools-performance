import React from 'react';
const LABEL_16635 = 'component_16635';
export function Component16635({ value = 16635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16635, 'data-value': derived.doubled }, children);
}
export default Component16635;
