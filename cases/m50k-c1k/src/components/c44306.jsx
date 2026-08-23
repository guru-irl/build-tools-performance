import React from 'react';
const LABEL_44306 = 'component_44306';
export function Component44306({ value = 44306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44306, 'data-value': derived.doubled }, children);
}
export default Component44306;
