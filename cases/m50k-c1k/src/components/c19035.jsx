import React from 'react';
const LABEL_19035 = 'component_19035';
export function Component19035({ value = 19035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19035, 'data-value': derived.doubled }, children);
}
export default Component19035;
