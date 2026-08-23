import React from 'react';
const LABEL_41035 = 'component_41035';
export function Component41035({ value = 41035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41035, 'data-value': derived.doubled }, children);
}
export default Component41035;
