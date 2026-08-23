import React from 'react';
const LABEL_24035 = 'component_24035';
export function Component24035({ value = 24035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24035, 'data-value': derived.doubled }, children);
}
export default Component24035;
