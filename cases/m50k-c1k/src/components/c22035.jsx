import React from 'react';
const LABEL_22035 = 'component_22035';
export function Component22035({ value = 22035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22035, 'data-value': derived.doubled }, children);
}
export default Component22035;
