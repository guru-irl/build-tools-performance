import React from 'react';
const LABEL_2417 = 'component_2417';
export function Component2417({ value = 2417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2417, 'data-value': derived.doubled }, children);
}
export default Component2417;
