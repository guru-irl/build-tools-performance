import React from 'react';
const LABEL_37670 = 'component_37670';
export function Component37670({ value = 37670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37670, 'data-value': derived.doubled }, children);
}
export default Component37670;
