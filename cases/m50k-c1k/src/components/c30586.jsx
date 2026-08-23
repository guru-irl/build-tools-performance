import React from 'react';
const LABEL_30586 = 'component_30586';
export function Component30586({ value = 30586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30586, 'data-value': derived.doubled }, children);
}
export default Component30586;
