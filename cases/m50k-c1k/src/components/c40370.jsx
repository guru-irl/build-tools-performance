import React from 'react';
const LABEL_40370 = 'component_40370';
export function Component40370({ value = 40370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40370, 'data-value': derived.doubled }, children);
}
export default Component40370;
